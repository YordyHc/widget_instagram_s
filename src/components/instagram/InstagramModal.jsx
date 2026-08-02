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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] overflow-auto rounded-xl bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-xl text-gray-500 transition hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div ref={embedRef} className="flex justify-center" />
      </div>
    </div>
  );
}

export default InstagramModal;
