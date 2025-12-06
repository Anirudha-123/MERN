 {cart.map((item) => 
             <div className="row" style={{marginTop:"100px"}}>
              <div className="col-md-6">
                <div className="card">
                  <img src={item.img} alt="" className="img-fluid" style={{height:"100px",objectFit:"cover"}} />
                  <div className="card-body">
                    <p>{item.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="summary">
                  <h3 className="text-center">Summary</h3>
                </div>
              </div>
             </div>
            
            )}