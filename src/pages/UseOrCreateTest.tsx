import {useOrCreate} from "./useOrCreate.ts";
import {makeArray} from "../data/util.ts";
import {makeRandomUser} from "../data/User.ts";

const UseOrCreateTest = () => {
    const headTexts = useOrCreate<string[]>('headTexts', () => ['No.', 'Name', 'Job Title', 'Email Address'])
    const users = useOrCreate('users', () => makeArray(100).map(makeRandomUser))
    const head = useOrCreate('head', () => headTexts.map(text => <th key={text}>{text}</th>))
    const body = useOrCreate('body', () => users.map((user,index) => <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td>
            <div>{user.avatar}</div>
            <p>{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
    </tr>))


    return (
        <div>
            <div>CreateOrUseTest</div>
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

export default UseOrCreateTest;