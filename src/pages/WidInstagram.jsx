import React, { useState, useEffect } from "react";
import ProfileCard from "../components/instagram/ProfileCard";
import Gallery from "../components/instagram/Gallery";
import InstagramModal from "../components/instagram/InstagramModal";
import { instagramService } from "../services/instagram";
//temporal-prueba
//import instagramData from "../mocks/ejemplo.json";

function WidInstagram() {
  const [perfil, setPerfil] = useState(null);
  const [posts, setPosts] = useState([]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await instagramService();

      setPerfil(response.perfil);
      setPosts(response.posts);
    };

    fetchData();
  }, []);

  /*
  //para prueba
  useEffect(() => {
    setPerfil(instagramData.perfil);
    setPosts(instagramData.posts);
  }, []);*/

  const openPost = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <ProfileCard perfil={perfil} />

      <Gallery posts={posts} onOpenPost={openPost} />

      <InstagramModal
        isOpen={isModalOpen}
        permalink={selectedPost?.permalink}
        onClose={closeModal}
      />
    </div>
  );
}

export default WidInstagram;
