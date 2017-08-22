import page from 'page';
import template from './template';
import title from 'title';
import empty from 'empty-element';
import header from '../header';

page('/:username', header, loadUser, function (ctx, next){
  var main = document.getElementById('main-container');
  title(`PlatziGram - ${ctx.params.username}`)
  empty(main).appendChild(template(ctx.user))
})

async function loadUser(ctx, next){
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
    next()
  } catch(err){
    console.log (err);
  }
}