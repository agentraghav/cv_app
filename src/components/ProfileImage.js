import React , {useState} from 'react'
import '../styles/image.css'
function ProfileImage() {
   
    let [profile,setProfile]=useLocalStorage('pic','https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg')

        function saveImg(e){
            var file = e.target.files[0];
            var reader = new FileReader();
            var url = reader.readAsDataURL(file);

            reader.onloadend = function (e) {
            setProfile(reader.result)
    };
  
    }
    
    return (
        <div>
             <img src={profile} id="img" className="img-responsive"/>
            <div>
                
                <div className="label">
                        <label class="custom-file-upload">
                                <input type="file" class= "img-upload" id="input" accept="image/*" onChange={saveImg}/>
                                <i class="fas fa-upload"></i> Upload Profile
                        </label>
                </div>
                
            </div>
        </div>
        
    )
}
function useLocalStorage(key,initialValue){
    const [storedValue,setStoredValue]=useState(()=>{
        try{
                const item =window.localStorage.getItem(key)
                return item ? JSON.parse(item) : initialValue
        }catch(error){
                console.log(error)
                return initialValue
        }
    });

    const setValue = value =>{
        try{
            const valueToStore=
            value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key,JSON.stringify(valueToStore))
        }catch(error){
            console.log(error)
        }
    };
    return [storedValue,setValue]
}
export default ProfileImage
