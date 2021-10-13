const IndividualProjectStaticPreview = ({ imagePaths }) => {
  return (
    <article>
      <h3>Static Previews</h3>
      <img src={imagePaths[0]} alt='first screenshot preview of project' />
      <img src={imagePaths[1]} alt='second screenshot preview of project' />
    </article>
  )
}

export default IndividualProjectStaticPreview
