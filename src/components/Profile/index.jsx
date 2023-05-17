import React from "react";
import Profile from "./profile";

const avatars = [
  { src: "../../../images/avatar001.jpg", alt: "Avatar 1", title: "Avatar-1" },
  { src: "../../../images/avatar002.jpg", alt: "Avatar 2", title: "Avatar-2" },
  { src: "../../../images/avatar003.jpg", alt: "Avatar 3", title: "Avatar-3" },
  { src: "../../../images/avatar004.jpg", alt: "Avatar 4", title: "Avatar-4" },
];

export default function ProfileScreen() {
  const [selectedAvatar, setSelectedAvatar] = React.useState(null);

  const handleSelectAvatar = (avatarSrc) => {
    setSelectedAvatar(avatarSrc);
  };

  return (
    <div>
      <div className="egg">
        <div className="user-avatar flex justify-center rounded-full items-center">
          {selectedAvatar && (
            <img
              src={selectedAvatar}
              alt="User Avatar"
              className="w-48 h-48 object-cover rounded-full"
            />
          )}
        </div>
      </div>
      <Profile avatars={avatars} onSelectAvatar={handleSelectAvatar} />
    </div>
  );
}
