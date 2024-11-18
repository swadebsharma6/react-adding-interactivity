export default function Signup() {
      return (
        <form onSubmit={(e) =>{
            e.preventDefault();
            console.log('Some thing')
        }}>
          <input type="text" name="name"  placeholder="Name" />
          <button>Send</button>
        </form>
      );
    }