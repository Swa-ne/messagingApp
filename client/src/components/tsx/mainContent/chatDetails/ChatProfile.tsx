export default function ChatProfile() {
    return (
        <div className="p-5 relative">
            <div className="w-[125px] h-[125px] mx-auto py-auto object-cover rounded-full overflow-hidden">
                {/* <img src={profile} className="w-full h-full object-cover" /> */}
                <img src='https://i.pinimg.com/originals/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg' className="w-full h-full object-cover" />
            </div>
            <h3 className="w-5/6 mt-1 break-words mx-auto text-center">John Sebs</h3>
        </div>
    );
}
