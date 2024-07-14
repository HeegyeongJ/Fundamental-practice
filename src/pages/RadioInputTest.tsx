import {useMemo, useState} from "react";
import {makeArray} from "../data/util.ts";
import {randomJobTitle} from "../data/chance.ts";

const RadioInputTest = () => {
    const jobTitles = useMemo(() => makeArray(4).map(randomJobTitle),[])
    const [selectedJob, setSelectedJob] = useState(jobTitles[0])
    const radioInputs = useMemo(() => jobTitles.map((value,index) => (
        <label key={index}>
            <input type={"radio"} name={'jobs'} checked={value === selectedJob} defaultValue={value} onChange={(e) => setSelectedJob(e.target.value)}/>
            <span>{value}</span>
        </label>
    )), [jobTitles, selectedJob])
    return (
        <section>
            <div>RadioInputTest</div>
            <div>
                <div>What is your job?</div>
                <div>Selected Job : {selectedJob}</div>
                <div>
                    <div>{radioInputs}</div>
                </div>
            </div>
        </section>
    );
};

export default RadioInputTest;
