import React from 'react'
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'

const Paginate = ({notes, currentPage, setCurrentPage}) => {

  const LastPage= Math.ceil(notes.length/ 6)
  // console.log(LastPage);


  const handleNext= () => {
    if(currentPage === LastPage){
      return null;
    }
    else{
      setCurrentPage(currentPage+1);
      window.scrollTo({ top: 20, behavior:'smooth' })
    }
  }

  const handlePrev= () => {
    if(currentPage === 1){
      return null;
    }
    else{
      setCurrentPage(currentPage-1);
      window.scrollTo({ top: 20, behavior:'smooth' })
    }
  }

  return (
    <div className='w-full pb-2'>
        
        <div className='w-full flex flex-row gap-3 justify-center items-center'>
          
          <button className='text-3xl border-2 border-white py-1 px-2 rounded-full text-white' onClick={handlePrev} ><MdNavigateBefore /></button>
          
          <div className='flex flex-row gap-1'>
            {/* <input type="number" className='border-b-2 px-2 text-xl mx-1 w-fit' value={3} onChange={handleValue} /> */}
            <div className='text-white border-b-2 px-2 text-xl mx-1'>{currentPage}</div>
            <div className='text-white px-2 text-xl mx-1'>/</div>
            <div className='text-white border-b-2 border-transparent px-1 text-xl mx-1'>{LastPage}</div>
          </div>

          <button className= 'text-3xl border-2 border-white py-1 px-2 rounded-full text-white' onClick={handleNext}><MdNavigateNext /></button>
        
        </div>
    </div>
  ) 
}

export default Paginate