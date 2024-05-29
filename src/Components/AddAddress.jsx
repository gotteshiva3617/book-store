function AddAddress() {
  return (
    <div className='address'>
        <h3>Add Address</h3>
    <form>
        <div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>Name:</strong></label>
                <input type="text" 
                className="form-control"
                name="name" 
                placeholder="Enter Your Name"
                required/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>Email:</strong></label>
                <input type="email" 
                className="form-control"
                name="email" 
                placeholder="Enter Your Email"
                required/>            
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>Mobile:</strong></label>
                <input type="number" 
                className="form-control"
                name="mobile" 
                placeholder="Enter Your Mobile"
                required/>            
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>Street:</strong></label>
                <input type="text" 
                className="form-control"
                name="street" 
                placeholder="Enter Street..."
                required/>            
            </div>
        </div>

        <div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>City:</strong></label>
                <input type="text" 
                className="form-control"
                name="city" 
                placeholder="Enter City"
                required/>            
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>State:</strong></label>
                <input type="text" 
                className="form-control"
                name="state" 
                placeholder="Enter State..."
                required/>            
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>PinCode:</strong></label>
                <input type="number" 
                className="form-control"
                name="pincode" 
                placeholder="Enter Pincode"
                required/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1"><strong>Country</strong></label>
                <input type="text" 
                className="form-control"
                name="country" 
                placeholder="Enter country"
                required/>            
            </div>
        </div>
        
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default AddAddress
