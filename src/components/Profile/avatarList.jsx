import React from "react";

// Avatar component to display the avatars
function Avatar({ src, alt, title, isSelected, onClick }) {
  const handleClick = () => {
    onClick(src);
  };

  return (
    <div
      className={`m-8 p-2 rounded-lg ${
        isSelected ? "bg-blue-500 text-white" : "bg-white"
      } hover:bg-blue-400 hover:text-white`}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <img src={src} alt={alt} title={title} />
      {title}
    </div>
  );
}

// AvatarList component to render the list of avatars
export default function AvatarList({
  avatars,
  onSelectAvatar,
  selectedAvatar,
}) {
  return (
    <div className="flex flex-wrap -m-8">
      {avatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          title={avatar.title}
          isSelected={selectedAvatar === avatar.src}
          onClick={onSelectAvatar}
        />
      ))}
    </div>
  );
}
