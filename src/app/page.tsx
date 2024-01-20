import TaskList from "@/components/TaskList";

const Home = async ({}) => {
  return (
    <div className="h-screen">
      <h1 className="text-4xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
        <small>TeachMate Task Manager</small>
        <br />
        <hr />
      </h1>

      <div className="grid place-items-center">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
