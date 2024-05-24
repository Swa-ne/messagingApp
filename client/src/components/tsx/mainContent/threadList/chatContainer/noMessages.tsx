export default function NoMessages() {
    return (<div className='chat-box w-full h-98p flex justify-between items-center p-2 flex-col'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <i data-visualcompletion="css-img" style={{
                backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/kY1nZGSY_4w.png")',
                backgroundPosition: '0px -181px',
                backgroundSize: 'auto',
                width: '245px',
                height: '180px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block'
            }}></i>
            <h6 className="text-2xl mt-4">No Messages</h6>
        </div>
    </div>
    )
}