interface ChatPreviewProps {
  name: string;
  lastMessage: string;
  noOfUnreadMessages: number;
  time: string;
  image: string;
}
export default function ChatPreview({
  name,
  lastMessage,
  noOfUnreadMessages,
  time,
  image,
}: ChatPreviewProps) {
  return (
    <div className="px-[24px] py-[10px] flex gap-4  items-center cursor-pointer hover:bg-[#F5F5F5]">
      <img src={image} alt="profile-image" className="w-14 h-14 rounded-full" />
      <div className="flex-grow">
        <div className="flex justify-between flex-grow">
          <p className="font-bold">{name}</p>
          <p className="text-gray-600">{time}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{lastMessage}</p>
          <div className="w-5 h-5 bg-[#25D366] rounded-full flex justify-center items-center text-white">
            <p>{noOfUnreadMessages}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
