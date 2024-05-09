import ActiveList from "./activeContainer/activeList";

export default function ActiveContainer() {
    return (
        <div className='w-full h-full bg-dark-background overflow-y-scroll'>
            <h3 className="p-3">
                People
                <br />
                <span className="text-xs font-light">Active People (3)</span>
            </h3>
            <ActiveList />
        </div>
    );
}
