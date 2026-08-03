import React, { useState, useEffect } from "react";
import ProfileCard from "../components/instagram/ProfileCard";
import Gallery from "../components/instagram/Gallery";
import InstagramModal from "../components/instagram/InstagramModal";

//temporal
import instagramData from "../mocks/instagram.json";

function WidInstagram() {
  const [perfil, setPerfil] = useState(null);
  const [posts, setPosts] = useState([]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  /*useEffect(() => {
    // Aquí irá tu llamada al backend
    /*
        const response = await instagramService();

        setPerfil(response.perfil);

        setPosts(response.posts);
    
  }, []);*/

  useEffect(() => {
    setPerfil(instagramData.perfil);
    setPosts(instagramData.posts);
  }, []);

  const openPost = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="container mx-auto">
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
