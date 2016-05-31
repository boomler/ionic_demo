import re
reg = re.compile(r'<.[^>]*.>')
text = '''<div class="row">
    <div class="col-sm-6 col-md-6 col-md-offset-3">
        <h1>Index Page <span class="label label-default">dfsfs</span></h1>
        <div class="thumbnail">
            <img src="{{img_src}}" alt="">
            <div class="caption">
                <h3>{{title}}</h3>
                <p>{{content}}</p>
                <p><a href="#" class="btn btn-primary" role="button">fsdfsfd</a> </p>
            </div>
        </div>
    </div>
</div>'''
# print re.findall(reg,text)
print re.subn(reg,"",text)
