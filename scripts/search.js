/**
 * TODO: This is a work in progress
 */

var restUrlBase = "http://dcp2.jboss.org/v2/rest/search?project=weld&sortBy=new&size=20&query=";

$("#search-form").submit(function(event) {
    search($("#search-text").val());
    event.preventDefault();
});

function search(query) {
    return $.getJSON(restUrlBase + query).done(
        function(data) {
            var output = '<div class="search-hits">Total hits: '
                + data.hits.total + "</div>";
            output += "<ol>";
            data.hits.hits
                .forEach(function(hit) {
                    output += "<li>";
                    output += getTypeIcon(hit._type);
                    output += "<a href=" + hit.fields.sys_url_view
                        + " target=\"_blank\">" + hit.fields.sys_title
                        + "</a> ";
                    if (hit.fields.sys_description) {
                        output += '<p class="search-desc">'
                            + abbreviate(hit.fields.sys_description.toString(), 150)
                            + "</p>";
                    }
                    output += "</li>";
                });
            output += "</ol>";
            $("#search-results").html(output);
        }).fail(function(jqXHR, textStatus, errorThrown) {
        alert('Search failure - unable to get JSON data: ' + textStatus);
    });
}

function getTypeIcon(type) {
    var icon = '<i class="';
    if (type == 'jbossorg_jira_issue') {
        icon += 'fa fa-bug';
    } else if (type == 'jbossorg_sbs_forum') {
        icon += 'fa fa-comment';
    } else if (type == 'jbossorg_blogpost') {
        icon += 'fa fa fa-newspaper-o';
    } else {
        // TODO other types, e.g. weld site and mailing list
        icon += 'fa fa-question';
    }
    icon += '"></i> ';
    return icon;
}

function abbreviate(text, limit) {
    if (text.length > limit) {
        return text.substring(0, limit) + "...";
    }
    return text;
}
