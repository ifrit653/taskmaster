export default function Error() {
  return (
    <div style={styles.container}>
      <h1 style = {styles.text}>404 Error</h1>
      <h2 style={styles.subtitle}> 
        page not found
      </h2>
    </div>
  )
}

const styles = {
  text: {
    fontSize: '100px',
    fontWeight: '30px',
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  subtitle:{
    textAlign: 'center'
  }
}