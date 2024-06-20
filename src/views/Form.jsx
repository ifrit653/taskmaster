import DragNDrop from "../components/DragNDrop";

export default function Form() {
  return (
    <>
      <h1 style = {styles.h1}>Drag and Drop File Upload</h1>
      <DragNDrop/> 
    </>
  )
}
const styles = {
  h1: {
    textAlign: 'center'
  }
};