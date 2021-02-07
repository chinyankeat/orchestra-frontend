import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToTreeDb } from '../../services/treeDbServices';

const AddTree = () => {
  const [treeId, setTreeId] = useState();
  const [treeType, setTreeType] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (treeId && treeType) {
      addToTreeDb(treeId, treeType);
    }
    console.log('You must enter a tree & ID');
  };
  
  return (
    <div>
      <Link to="/">View Tree</Link>
    <h2>Add Tree</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tree Id"
        onChange={({ target }) => setTreeId(target.value)}
      /><br />
      <input
        type="text"
        placeholder="Tree Type"
        onChange={({ target }) => setTreeType(target.value)}
      /><br />
      
      <button type="submit">
        Add tree
      </button>
    </form>
    </div>
  )
};
export default AddTree;