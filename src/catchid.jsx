import { useParams } from "react-router-dom";

function catchid() {
    const  {id} = useParams();
    const data = [
        {
            name: 'john',
            age: 0,
            gender: 'male'
        },
        {
            name: 'jane',
            age: 1,
            gender: 'female'
        },
        {
            name: 'julie',
            age: 2,
            gender: 'trans'
        }
    ]


return (
    <>
      <p>hello gautam</p>
      <p>{data[id].name}</p>
      <p>{data[id].gender}</p>
    </>
  )
}

export default catchid