import React,{useState} from 'react';
import { MessageBox, Loading, i18n } from 'element-react';
import 'element-theme-default';
import locale from 'element-react/src/locale/lang/en';
i18n.use(locale);

export default function ContactSection() {
  //state variable
  const[values, setValues] = useState({
    name: "",
    email: "",
    content: "",
    loading: false
  })

// destructor the state variable
const {
  name,
  email,
  content,
  loading,
} = values;


const handleChange = name => event => {
  setValues({...values, [name]: event.target.value})
}


const btnEmailSend = (e) =>{
  e.preventDefault();
  var service_id = "default_service";
  var template_id = "wish_dev";
  // 
  if(name ===''){
    setValues({...values, loading:false})
    MessageBox.alert("Name is Empty", 'Warning',  {type: 'warning'});
  }else if(email === ''){
    // alert("email is empty")
    setValues({...values, loading:false})
    MessageBox.alert("Email is Empty", 'Warning', {type: 'warning'});

  }else if(content ===''){
    setValues({...values, loading:false})
    MessageBox.alert("Message is Empty", 'Warning', {type: 'warning'});
  }
  else{
    setValues({loading:true})
    window.emailjs.send(service_id, template_id, {message_html:content, from_name: name, reply_to: email})
    // .then(response => console.log('SUCCESS!', response.status, response.text))
    .then(response => {
      if(response.status === 200){
        setValues({...values, name: '', email: '', content: '', error: false, success:true })
        MessageBox.alert("Message successfully sent", 'Success', {type: 'success'});
        
      }
    })

    .catch(err => {
      setValues({...values, error: "Message couldn't sent.", loading:false})
      MessageBox.alert("Message Could not sent", 'Error');
    })
  }
 
  
}


  // render main component
  return (
      <section className="contact py-5" id="contact_section">
        {loading && <Loading fullscreen="true" />}
      <div className="container in-down">
        <div className="row">
          
          <div className="col-lg-5 mr-lg-5 col-12">
          <div className="google-map w-100">
           <iframe title="map" width="100%" height="400" src="https://maps.google.com/maps?width=100%&amp;height=400&amp;hl=en&amp;coord=17.4618242, 78.5004605&amp;q=103%2FC%20%2C%20Secunderabad%2C%20Karkhana+(Software%20Developer)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/draw-radius-circle-map/">Radius map tool</a></iframe></div><br />
          
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Ready to help you.</h2>

              <form>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input type="text" className="form-control" name="name" placeholder="Your Name" id="name" onChange={handleChange('name')} value={name} />
                  </div>

                  <div className="col-lg-6 col-12">
                    <input type="email" className="form-control" name="email" placeholder="Email" id="email"  onChange={handleChange('email')} value={email}/>
                  </div>

                  <div className="col-12">
                    <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" onChange={handleChange('content')} value={content}></textarea>
                  </div>

                  <div className="ml-lg-auto col-lg-5 col-12">
                    <input type="submit" className="form-control btn custom-btn custom-btn-bg custom-btn-link" value="Send Button" onClick = {btnEmailSend}/>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
