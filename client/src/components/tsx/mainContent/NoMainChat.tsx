export default function NoMainChat() {
    return (<div className='chat-box w-full h-98p flex justify-between items-center p-2 flex-col'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <i style={{
                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/DKu6_1ojjk3.png")',
                backgroundPosition: '0px -181px',
                backgroundSize: 'auto',
                width: '245px',
                height: '180px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block'
            }}></i>
            <h6 className="text-2xl mt-4">No chats selected</h6>
        </div>
    </div>
    )
}