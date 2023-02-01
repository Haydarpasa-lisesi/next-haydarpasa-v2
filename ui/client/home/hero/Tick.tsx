interface TickProps {
  tick: string;
}

const Tick = ({ tick }: TickProps) => {
  return (
    <div className="col-span-12 flex items-center sm:col-span-6">
      <svg
        fill="#FA5252"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="30px"
        height="30px"
        className="min-h-[1.5rem] min-w-[1.5rem]"
      >
        {' '}
        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.707,12.707l-7.56,7.56 c-0.188,0.188-0.442,0.293-0.707,0.293s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0 l2.746,2.746l6.853-6.853c0.391-0.391,1.023-0.391,1.414,0S22.098,12.316,21.707,12.707z" />
      </svg>
      <p className="flex-1 py-1 pl-1 text-base text-gray-500">{tick} </p>
    </div>
  );
};

export default Tick;
