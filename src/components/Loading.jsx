
const Loading = ({isLoading}) => {
  return (
    <div>
      {isLoading? (
        <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
          
        </svg>

      ): " "}
    </div>
    
  )
}

export default Loading