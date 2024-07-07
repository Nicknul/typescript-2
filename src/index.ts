type JobType = '인간' | '고양이';

interface Jeonghoyeon {
  name: string;
  age: number;
  job: JobType;
}

const getRandomJob = (): JobType => {
  const jobs: JobType[] = ['인간', '고양이'];

  const randomIndex: number = Math.floor(Math.random() * jobs.length);
  return jobs[randomIndex];
};

const minamTruth = (): Jeonghoyeon => {
  const person: Jeonghoyeon = {
    name: '정호연',
    age: 27,
    job: getRandomJob(),
  };
  return person;
};

const result = minamTruth();

console.log(result);
