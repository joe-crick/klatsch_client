export default React => (props) => {
    return (
        <login-modal>
          <div className="modal fade"
            id="login-modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby={props.store.login}
            aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                          <h4 className="modal-title" id={props.store.login}>{props.store.login}</h4>
                      </div>
                      <div className="modal-body">
                          <input type="text" placeholder={props.store.email}></input>
                          <input type="password" placeholder={props.store.password}></input>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">{props.store.close}</button>
                          <button type="button" className="btn btn-primary">{props.store.login}</button>
                      </div>
                  </div>
              </div>
          </div>
        </login-modal>
    );
}
