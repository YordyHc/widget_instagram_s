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
          {/* Botón */}
          <div className="flex justify-end mb-3 md:absolute md:top-1 md:-right-10 md:mb-0">
            <button
              onClick={onClose}
              className="rounded-full bg-black/70 p-2 text-white hover:bg-gray-500 transition-colors duration-1000"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div ref={embedRef} className="flex justify-center" />
        </div>
      </div>
    </div>
  );
}

export default InstagramModal;
