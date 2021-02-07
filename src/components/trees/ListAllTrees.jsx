import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTreeEntries } from '../../services/treeDbServices';

const ListAllTrees = () => {
    const [entries, setEntries] = useState();
    useEffect(() => {
        const fetchEntries = async () => {
            const fetchedEntries = await getTreeEntries();
            setEntries(fetchedEntries);
        }
        fetchEntries();
    }, [])
    if (entries === undefined) {
        return null;
    }
    return (
        <div>
            <Link to="/add-tree">Add Tree</Link>
            <h2>Trees</h2>

            <table>
                <thead>
                    <tr>
                        <th>Tree ID</th>
                        <th>TreeType</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry) => (
                        <tr>
                            <td>{entry.treeId}</td>
                            <td>{entry.treeType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
export default ListAllTrees;