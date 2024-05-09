import ThreadListRoutes from "../../../routes";

export default function ThreadList() {
    return (
        <div className='thread-list w-[350px] flex justify-between items-center py-2 flex-col'>
            <ThreadListRoutes />
        </div>
    );
}
