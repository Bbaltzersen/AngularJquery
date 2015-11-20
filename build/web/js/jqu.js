$(function () {
    var $addInfoMember = $('#addInfoMember');
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: 'api/member',
        success: function (members) {
            $.each(members, function (i, member) {
                $('#addInfoMember').append('<tr>'
                        + '<td>' + member.age + '</td>'
                        + '<td>' + member.name + '</td>'
                        + '<td>' + member.email + '</td>'
                        + '</tr>');
            });
        }
    });
});
    