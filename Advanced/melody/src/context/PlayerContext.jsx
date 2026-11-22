import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songs } from "../data/music";

const PlayerContext = createContext(null);
export const usePlayer = () => useContext(PlayerContext);

function read(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

export function PlayerProvider({ children }) {
  const audio = useRef(new Audio());
  const [queue, setQueue] = useState([]);
  const [index, setIndex] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState({ now: 0, total: 0 });
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState("off");
  const [liked, setLiked] = useState(() => read("melody:liked", []));
  const [recent, setRecent] = useState(() => read("melody:recent", []));

  const current = queue[index];

  useEffect(() => localStorage.setItem("melody:liked", JSON.stringify(liked)), [liked]);
  useEffect(() => localStorage.setItem("melody:recent", JSON.stringify(recent)), [recent]);

  useEffect(() => {
    const a = audio.current;
    const update = () => setTime({ now: a.currentTime, total: a.duration || 0 });
    const failed = () => setPlaying(false);
    a.addEventListener("timeupdate", update);
    a.addEventListener("loadedmetadata", update);
    a.addEventListener("error", failed);
    return () => {
      a.removeEventListener("timeupdate", update);
      a.removeEventListener("loadedmetadata", update);
      a.removeEventListener("error", failed);
    };
  }, []);

  useEffect(() => {
    audio.current.volume = volume;
    audio.current.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    if (!current) return;
    const a = audio.current;
    a.src = current.src;
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    setRecent((r) => [current.id, ...r.filter((id) => id !== current.id)].slice(0, 20));
  }, [current?.id]);

  useEffect(() => {
    const a = audio.current;
    const onEnd = () => {
      if (repeat === "one") {
        a.currentTime = 0;
        a.play();
      } else {
        next(true);
      }
    };
    a.addEventListener("ended", onEnd);
    return () => a.removeEventListener("ended", onEnd);
  });

  useEffect(() => {
    const onKey = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName) && e.target.type !== "range") return;
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "n") next();
      if (e.key === "p") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function play(list, start = 0) {
    setQueue(list);
    setIndex(start);
  }

  function playShuffled(list) {
    setShuffle(true);
    play(list, Math.floor(Math.random() * list.length));
  }

  function toggle() {
    const a = audio.current;
    if (!current) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  }

  function next(auto = false) {
    if (!queue.length) return;
    if (shuffle && queue.length > 1) {
      let n;
      do n = Math.floor(Math.random() * queue.length);
      while (n === index);
      return setIndex(n);
    }
    if (index < queue.length - 1) return setIndex(index + 1);
    if (repeat === "all" || !auto) return setIndex(0);
    setPlaying(false);
  }

  function prev() {
    if (audio.current.currentTime > 3 || index <= 0) {
      audio.current.currentTime = 0;
    } else {
      setIndex(index - 1);
    }
  }

  function seek(t) {
    audio.current.currentTime = t;
    setTime((s) => ({ ...s, now: t }));
  }

  function toggleLike(id) {
    setLiked((l) => (l.includes(id) ? l.filter((x) => x !== id) : [...l, id]));
  }

  function addToQueue(song) {
    if (!queue.length) return play([song]);
    setQueue((q) => [...q, song]);
  }

  function cycleRepeat() {
    setRepeat((r) => (r === "off" ? "all" : r === "all" ? "one" : "off"));
  }

  const recentSongs = recent.map((id) => songs.find((s) => s.id === id)).filter(Boolean);

  const value = {
    current, playing, time, volume, muted, shuffle, repeat, liked, recentSongs,
    play, playShuffled, toggle, next, prev, seek, toggleLike, addToQueue, cycleRepeat,
    setVolume, setMuted, setShuffle,
  };

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}
