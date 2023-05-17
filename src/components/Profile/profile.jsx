import React from "react";
import AvatarList from "./avatarList";
import Modal from "./modal";

export default function Profile({ avatars, onSelectAvatar }) {
  const [selectedAvatar, setSelectedAvatar] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProfile = () => {
    onSelectAvatar(selectedAvatar);
    closeModal();
  };

  const handleSelectAvatar = (avatarSrc) => {
    setSelectedAvatar(avatarSrc);
  };

  return (
    <div>
      {!selectedAvatar ? (
        <div>
          <button
            onClick={openModal}
            className="border-2 border-blue-500 text-blue-500 
      hover:text-white hover:bg-blue-500 font-semibold 
      py-2 px-4 rounded-md shadow-md hover:shadow-lg 
      transition duration-300 mt-8 ml-16"
          >
            Select an Avatar
          </button>
        </div>
      ) : null}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="avatars overflow-y-auto max-h-80">
          <h1 className="mb-2">Select Your Avatar</h1>
          <AvatarList
            avatars={avatars}
            onSelectAvatar={handleSelectAvatar}
            selectedAvatar={selectedAvatar}
          />
        </div>

        <button
          className="px-4 py-2 bg-gradient-to-r from-purple-500 
          to-blue-500 text-white rounded-lg shadow-lg 
          hover:from-purple-600 hover:to-blue-600 hover:shadow-xl 
          transition-colors duration-300"
          onClick={handleSaveProfile}
        >
          Save to Profile
        </button>
      </Modal>
    </div>
  );
}
