import ThreadListRoutes from "../../../routes";
import DefaultProps from "../../../types/defaultProps";

export default function ThreadList({ socket }: DefaultProps) {
    return (
        <div className='thread-list w-[350px] flex justify-between items-center py-2 flex-col'>
            <ThreadListRoutes socket={socket} />
        </div>
    );
}
