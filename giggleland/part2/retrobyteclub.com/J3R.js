(function(){
    const _tracker = {
      init: function(e){this.e=e;return this},
      log: function(t,d){
        const o=this.e;
        if(!o||!t)return;
        const p=btoa(JSON.stringify({a:'view',t:t})).split('').reverse().join('');
        setTimeout(function(){
          try{o.style.transform=d?'translateY(-5px)':'translateY(0)';
          }catch(e){}
        },50);
        return p;
      }
    };
    
    const _hashes = [
      'e5f3a2d1b9c8',
      '7b6a5d4e2f1c',
      '3d2e4f5a6b7c',
      '9a8b7c6d5e4f',
      'f1e2d3c4b5a6',
      '2c3d4e5f6a7b',
      'b5a6c7d8e9f1',
      'a1b2c3d4e5f6'
    ];
    
    function _r(s){return s.split('').sort(function(){return Math.random()-0.5}).join('')}
    
    document.addEventListener('DOMContentLoaded', function() {
      const _el = document.querySelector('[data-tracking-enabled="true"]') || 
                  document.getElementById('cloud-icon') || 
                  document.querySelector('.analytics-tracker');
      
      if(!_el) return;
      
      _el.style.transition = 'opacity 0.2s, transform 1.5s cubic-bezier(0.26, 0.54, 0.32, 0.94)';
      
      const _t = _tracker.init(_el);
      let _i = 0, _s = false;
      
      function _track(){
        if(_i >= _hashes.length) return; // check if _hashes variable above length (8) less than _i
        
        _s = !_s; // turn s true
        
        _t.log(_r(_hashes[Math.floor(_i/2)]), _s); _i / 2 (4);
        
        if(!_s) _i++;
        const _d = 1350 + Math.random() * 300;
        console.log("_i: "+_i)
        console.log("_s: "+_s)
        console.log("_t: "+_t)
        console.log("_d: "+_d)
        setTimeout(_track, _d);
      }
      
      setTimeout(function(){
        const _uid = Math.random().toString(36).substring(2, 15);
        console.debug('Analytics initialized: ' + _uid);
        _track();
      }, 100 + Math.random() * 150);
    });
  })();