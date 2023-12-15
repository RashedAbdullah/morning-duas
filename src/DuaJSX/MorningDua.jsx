import duas from '../duasJSON/duas.json';
import '../css/duas.css'
import { useState } from 'react';

const MorningDua = () => {

    const [isCompleted, setIsCompleted] = useState(false);

   
    const handleCheckbox = (e, id)=>{
        const filteddua = duas.filter((dua)=>dua.id === id);
        setIsCompleted(e.target.checked)
        console.log(filteddua)
    }

  return (
    <div dir='rtl' className='mainDuaDiv'>
        <div className='duaTitle'><h2>أذكار الصباح والمساء</h2></div>
        {
            duas.map(dua=>(
                <div key={dua.id} className={isCompleted? "markingCompleted" : ""}>
                    <div>
                        <span className='duaNumber'>{dua.id} </span>
                        <span className='singleDuaTitle'>{dua.title} </span>
                        <span >{dua.dua} </span>
                        <span className='duaRepeat'>{dua.repeat} </span>
                        <span className='duaReference'>( {dua.reference} )</span>
                    </div>
                </div>
            ))
        }
        <div className='duafooter'>
            <p>(من حصن الإسلام من أذكار الكتاب والسنة بعد مراجعة المراجع)</p>
            <p>اللهم وفقنا لطاعتك واتباع سنة حبيبك واجعلنا من الصالحين</p>
        </div>
    </div>
  )
}

export default MorningDua;