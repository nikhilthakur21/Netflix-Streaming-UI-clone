
const Question = (Props)=>{

    return(

        <>

         <details className="group bg-[#2d2d2d] text-white p-5 rounded mb-3">
          <summary className="cursor-pointer text-xl font-semibold flex justify-between items-center">
            {/* What is Netflix? */}{Props.question}
            <i className="fa-solid fa-plus text-3xl"></i>
          </summary>
          <p className="mt-3 text-gray-300">
            {/* Netflix is a streaming service where you can watch movies and shows. */}{Props.answer}
          </p>
        </details>

       
        </>
    )

}

export default Question