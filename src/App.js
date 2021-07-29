import { firestore } from "./firebase";

function App() {
  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore.collections("posts").get();
      console.log(result);

      querySnapshot.forEach((doc) => {
        console.log({
          id: doc.id,
          title: doc.data(),
        });
      });
    };

    f();

  }, []);


  return <div></div>
}
export default App;