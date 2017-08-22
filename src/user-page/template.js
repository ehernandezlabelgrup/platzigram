var yo = require('yo-yo');
var layout = require('../layout');
var translate = require('../translate').message;
                   
module.exports = function (user) {
  console.log(user.pictures)
  var el =  yo `<div class="container user-page">
  <div class="row">
    <div class="col s12 m10 offset-m1 l8 offset-l2 center-align herading">
      <div class="row">
        <div class="col s12 m10 offset-m1 l3 offset-l3 center">
          <img src="${user.avatar}" class="responsive-img circle">
        </div>
        <div class="col s12 m10 offset-m1 l6 left-align">
          <h2 class="hide-on-large-only center-align">${user.username}</h2>  
          <h2 class="hide-on-med-and-down center-align">${user.username}</h2>  
        </div>
      </div>
    </div>
      <div class="row">
        ${user.pictures.map(function (picture) {
          
          return yo `<div class="col s12 m6 l4">
            <div class="picture-container">
              <img src="${picture.src}" class="picture materialboxed responsive-img" data-caption="${translate('likes',{likes: picture.likes})}">
              <div class="likes"><i class="fa fa-heart"></i> ${picture.likes}</div>
            </div>
              <div id="modal${picture.id}" class="modal modal-fixed-footer">
                <div class="modal-content">
                  <img src ="${picture.src}">
                </div>
                <div class="modal-footer">
                  <div class="btn btn-flat likes">
                    <i class="fa fa-heart"> </i> ${translate('likes',{likes: picture.likes})}
                  </div>
                </div>
              </div>
          </div>`;
        })}
      </div>
  </div>
</div>`

  return layout (el);
}

//<a href="/${user.username}/${picture.id}" class="picture-container">
//  <img src="${picture.src}" class="picture">
//  <div class="likes"><i class="fa fa-heart"></i> ${picture.likes}</div>
//</a>