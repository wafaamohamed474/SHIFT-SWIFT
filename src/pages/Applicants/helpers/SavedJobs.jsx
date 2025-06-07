import { faCircleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function SavedJobs() {
  const jobs = [
    { title: 'Call Center', date: 'October 30, 2017', posted: false },
    { title: 'Markting Cordinator', date: 'October 30, 2017', posted: true },
    { title: 'Nursing Assistant', date: 'October 30, 2017', posted: false },
    { title: 'Web Designer', date: 'October 30, 2017', posted: true },
  ];

  return (
    <div className="pt-6 px-4 md:px-8">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="w-full py-4 border-b border-gray-300 flex items-center justify-between"
        >
          <div>
            <h1 className="text-2xl font-semibold  mb-1">{job.title}</h1>
            <p className="text-sm text-gray-500">{job.date}</p>
          </div>
          <div
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium
              ${job.posted ? 'text-green-600 bg-green-50' : 'text-main-color bg-main-bg'}`}
          >
            <FontAwesomeIcon
              icon={job.posted ? faCircleCheck : faCircleExclamation}
              className="mr-2"
            />
            {job.posted ? 'Successfully Posted' : 'Not Posted Yet!'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedJobs;
