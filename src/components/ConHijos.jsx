const ConHijos = (props) => {
  return (
    <div style={{border:"solid red 2px", margin:"20px"}}>
        <div>Inicia componente con Children</div>
        {props.children}
        <div>Finalza componente con Children</div>
    </div>
  )
}

export default ConHijos

