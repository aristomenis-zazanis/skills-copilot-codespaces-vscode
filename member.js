function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        bindToController: true,
        scope: {
            member: '='
        }    
    };
}