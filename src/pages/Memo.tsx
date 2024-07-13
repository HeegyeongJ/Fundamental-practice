import {useOrCreate} from "./useOrCreate.ts";
import {makeArray} from "../data/util.ts";
import {IUser, makeRandomUser} from "../data/User.ts";
import {useMemo} from "react";

const Memo = () => {
    const headTexts = useMemo<string[]>( () => ['No.', 'Name', 'Job Title', 'Email Address'],[])
    const users = useMemo<IUser[]>( () => makeArray(100).map(makeRandomUser),[])
    const head =useMemo( () => headTexts.map(text => <th key={text}>{text}</th>),[headTexts])
    const body = useMemo( () => users.map((user,index) => <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td>
            <div>{user.avatar}</div>
            <p>{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
    </tr>),[users])
    return (
        <div>
            <div>Memo</div>
            <div>
                <table>
                    <thead>
                    </thead>
                    <tbody>{body}</tbody>
                </table>
            </div>
        </div>
    );
};

export default Memo;