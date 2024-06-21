import Navigation from "./Navigation"

export default function Layout({children}) {
  return (
    <div style={styles.container} className="main-container">
      <Navigation/> 
      <div style={styles.container}>
        <main style = {styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}
const styles={
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh'
  },
  main: {
    width: '80vw',
    margin: '0 auto'
  }
}