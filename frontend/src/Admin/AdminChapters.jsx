import React from 'react'
import { useParams } from 'react-router-dom';

function AdminChapter() {
  const { subject } = useParams();
  
  return (
    <div>
      All Chapters here....
    </div>
  )
}

export default AdminChapter
