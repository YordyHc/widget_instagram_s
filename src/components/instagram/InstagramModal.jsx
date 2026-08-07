import React, { useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

function InstagramModal({ isOpen, onClose, permalink }) {
  const embedRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !permalink) return;

    // Limpiar contenido anterior
    embedRef.current.innerHTML = `
            <blockquote
                class="instagram-media"
                data-instgrm-permalink="${permalink}?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14">
            </blockquote>
        `;

    // Cargar el script solo una vez
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      script.onload = () => {
        window.instgrm?.Embeds?.process();
      };

      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [isOpen, permalink]);

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70"
      onClick={onClose}
    >
      <div className="flex min-h-screen items-center justify-center p-6">
        <div
          className="relative w-[100%] md:w-[500px] lg:w-[700px] rounded-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botón fuera del contenedor */}
          <button
            onClick={onClose}
            className="
      absolute
      -right-10
      top-3
      z-50
      text-white
      hover:scale-110
      transition-transform
    "
          >
            <FaTimes size={24} />
          </button>

          <div ref={embedRef} className="flex justify-center" />
        </div>
      </div>
    </div>
  );
}

export default InstagramModal;
