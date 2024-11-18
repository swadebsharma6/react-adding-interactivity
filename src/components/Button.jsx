
const Button = () => {

const handleClick =()=>{
      console.log('Btn is Click')
}
      return (
            <div>
                 <button onClick={handleClick}>Click Here !</button> 
            </div>
      );
};

export default Button;