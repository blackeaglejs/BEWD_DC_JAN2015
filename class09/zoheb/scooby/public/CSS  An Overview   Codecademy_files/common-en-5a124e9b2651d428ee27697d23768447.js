    window.JST = window.JST || {};
    window.JST['common/_avatar'] = "\u003Cimg class=\"avatar\" alt=\"{{handle}}\" src=\"{{profile_image_url}}\" /\u003E\n";
window.JST['common/_pagination_li'] = "\u003Cli class=\"{{#is_current_page}}active{{/is_current_page}}\"\u003E\n  \u003Ca href=\"{{url}}\"\u003E{{page_no}}\u003C/a\u003E\n\u003C/li\u003E";
window.JST['common/_notification_items'] = "{{#items}}\n  \u003Cli class=\"notification-item {{#unread}}unread{{/unread}}\"\u003E\n    {{\u003Efeed_items/_item}}\n  \u003C/li\u003E\n{{/items}}\n";
window.JST['common/_overlay'] = "\u003Cdiv class=\"overlay-modal\"\u003E\u003Ca class=\"close\" href=\"#\"\u003E\u0026times;\u003C/a\u003E\n  \u003Cdiv class=\"overlay-header header\"\u003E\u003Ch2\u003E{{{ header }}}\u003C/h2\u003E\u003C/div\u003E\n  \u003Cdiv class=\"overlay-subheader subheader\"\u003E{{{ subheader }}}\u003C/div\u003E\n  \u003Cdiv class=\"overlay-body body\"\u003E{{{ body }}}\u003C/div\u003E\n  \u003Cdiv class=\"overlay-footer footer\"\u003E\n    \u003Cbutton class=\"btn btn-cancel\" data-dismiss=\"modal\"\u003E{{ footer.cancel }}\u003C/button\u003E\n    \u003Cbutton class=\"btn btn-primary\" data-dismiss=\"modal\"\u003E{{ footer.primary }}\u003C/button\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['common/_avatar_link'] = "{{#username}}\n  \u003Cspan class=\"avatar\"\u003E\n    \u003Cimg alt=\"{{handle}}\" src=\"{{profile_image_url}}\" /\u003E\n  \u003C/span\u003E\n{{/username}}\n\n{{^username}}\n  \u003Ca href=\"/users/{{username}}\" class=\"avatar\"\u003E\n    \u003Cimg alt=\"{{handle}}\" src=\"{{profile_image_url}}\" /\u003E\n  \u003C/a\u003E\n{{/username}}\n";
window.JST['common/_pagination'] = "\u003Cdiv class=\"cc-pagination\"\u003E\n  \u003Ca href=\"#\" class=\"previous {{#is_start}}disabled{{/is_start}}\"\u003E\n    \u0026larr; Previous\n  \u003C/a\u003E\n\n  \u003Cul\u003E\n  {{#pages}}\n    \u003Cli\u003E\n      \u003Ca href='#' class=\"{{#current_page}}active{{/current_page}}\" data-page=\"{{index}}\"\u003E\n        \u003Cspan\u003E{{index}}\u003C/span\u003E\n      \u003C/a\u003E\n    \u003C/li\u003E\n  {{/pages}}\n  \u003C/ul\u003E\n\n  \u003Ca href=\"#\" class=\"next {{#is_end}}disabled{{/is_end}}\"\u003E\n    Next \u0026rarr;\n  \u003C/a\u003E\n\u003C/div\u003E\n";
window.JST['common/_tabs'] = "\u003Cdiv class=\"tabs\"\u003E\n  \u003Cul\u003E\n    {{#tabs}}\n      \u003Cli\u003E\n        \u003Ca href=\"{{href}}\" data-type=\"{{type}}\" class=\"tab {{#active}}active{{/active}}\"\u003E\n          {{text}}\n          \u003Cspan class=\"count {{^count}}hidden{{/count}}\"\u003E{{count}}\u003C/span\u003E\n        \u003C/a\u003E\n      \u003C/li\u003E\n    {{/tabs}}\n  \u003C/ul\u003E\n\u003C/div\u003E\n";
window.JST['common/_banner'] = "\u003Cdiv class=\"banner\"\u003E\n  \u003Cdiv class=\"notice fade in\" data-notice-name=\"{{{ noticeName }}}\"\u003E\n    \u003Ca class=\"close\" href=\"#\" data-dismiss=\"alert\"\u003E\u0026times;\u003C/a\u003E\n    \u003Cb\u003E{{{ header }}}\u003C/b\u003E \u003Cspan class='banner-body'\u003E{{{ body }}}\u003C/span\u003E\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['common/_header_stats'] = "\u003Cp\u003E\n  {{#point_count_is_singular}}\n    \u003Cstrong\u003E{{points_today}}\u003C/strong\u003E point today\n  {{/point_count_is_singular}}\n  {{^point_count_is_singular}}\n    \u003Cstrong\u003E{{points_today}}\u003C/strong\u003E points today\n  {{/point_count_is_singular}}\n\u003C/p\u003E\n\n\u003Cp\u003E\n  \u003Cstrong\u003E{{streak_count}}\u003C/strong\u003E day streak\n\u003C/p\u003E\n";
window.JST['dashboard/notifications/_empty_state'] = "\u003Cdiv class='no-notifications'\u003E\n  \u003Cdiv\u003EYou don't have any notifications yet.\u003C/div\u003E\n\u003C/div\u003E\n\n";
window.JST['feed_items/_load_more'] = "\u003Ca class=\"feed-load-more\" href=\"#\"\u003E\n  \u003Cspan class=\"state-idle\"\u003EShow more\u003C/span\u003E\n  \u003Cspan class=\"state-loading\"\u003ELoading...\u003C/span\u003E\n\u003C/a\u003E\n";
window.JST['feed_items/_streak_extended'] = "{{\u003Efeed_items/shared/_actot_link}}\n\t{{\u003Efeed_items/shared/_actor_link}}\n  completed\n  {{#course}}\n    \u003Ca href=\"/courses/{{slug}}\"\u003E{{name}}\u003C/a\u003E\n  {{/course}}\n  for a{{#record}}n all time record{{/record}}\n  {{streak_count}} day streak!\n\n\t{{\u003Efeed_items/shared/_timestamp}}\n";
window.JST['feed_items/_curriculum_completed'] = "  {{\u003Efeed_items/shared/_actor_link}}\n  completed\n  {{#curriculum}}\n    \u003Ca href=\"/tracks/{{slug}}\"\u003E{{name}}\u003C/a\u003E\n  {{/curriculum}}\n\t{{\u003Efeed_items/shared/_timestamp}}\n";
window.JST['feed_items/_achievement_awarded'] = "  earned the\n  {{#achievement}}\n    {{name}}\n  {{/achievement}}\n  badge\n\n\t{{\u003Efeed_items/shared/_timestamp}}\n";
window.JST['feed_items/_no_content_group'] = "\u003Cdiv class=\"no-activity-container\"\u003E\n\n  \u003Ch5\u003EStart interacting with your group members to generate activity!\u003C/h5\u003E\n\n\u003C/div\u003E\n";
window.JST['feed_items/_no_content_user'] = "\u003Cdiv class=\"no-activity-container\"\u003E\n\n  \u003Ch4\u003EHey there, welcome to Codecademy!\u003C/h4\u003E\n\n  \u003Ca href=\"/groups\"\u003E\n    \u003Ch5\u003EJoin some groups to start generating activity! \u0026rarr;\u003C/h5\u003E\n  \u003C/a\u003E\n\n\u003C/div\u003E\n";
window.JST['feed_items/_streak_record_broken'] = "{{\u003Efeed_items/shared/_actor_link}}\n\n  broke\n  {{#is_current_user}}\n   your\n  {{/is_current_user}}\n  {{^is_current_user}}\n  their\n  {{/is_current_user}}\n  streak record!\n\n\t{{\u003Efeed_items/shared/_timestamp}}\n";
window.JST['feed_items/_forum_question_created'] = "\u003Ca class=\"notification-container\" href=\"{{\u003Efeed_items/shared/_forum_post_link}}\"\u003E\n  \u003Cdiv class=\"cell-image\"\u003E\n    {{#actor}}{{\u003Ecommon/_avatar}}{{/actor}}\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"cell-body\"\u003E\n    {{\u003Efeed_items/shared/_actor_name}}\n    asked\n    {{#forum_question}}\n      \u003Cstrong\u003E{{title}}\u003C/strong\u003E\n    {{/forum_question}}\n    in the forums\n\n    \u003Cdiv class=\"feed-footer light-text\"\u003E\n      {{\u003Efeed_items/shared/_timestamp}}\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/a\u003E\n";
window.JST['feed_items/_forum_comment_created'] = "\u003Ca class=\"notification-container\" href=\"{{\u003Efeed_items/shared/_forum_post_link}}\"\u003E\n  \u003Cdiv class=\"cell-image\"\u003E\n    {{#actor}}{{\u003Ecommon/_avatar}}{{/actor}}\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"cell-body\"\u003E\n    {{\u003Efeed_items/shared/_actor_name}}\n    commented on\n    {{#forum_question}}\n      \u003Cstrong\u003E{{title}}\u003C/strong\u003E\n    {{/forum_question}}\n\n    \u003Cdiv class=\"feed-footer light-text\"\u003E\n      {{\u003Efeed_items/shared/_timestamp}}\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/a\u003E\n";
window.JST['feed_items/_forum_answer_created'] = "\u003Ca class=\"notification-container\" href=\"{{\u003Efeed_items/shared/_forum_post_link}}\"\u003E\n  \u003Cdiv class=\"cell-image\"\u003E\n    {{#actor}}{{\u003Ecommon/_avatar}}{{/actor}}\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"cell-body\"\u003E\n    {{\u003Efeed_items/shared/_actor_name}}\n    answered\n    {{#forum_question}}\n      \u003Cstrong\u003E{{title}}\u003C/strong\u003E\n    {{/forum_question}}\n\n    \u003Cdiv class=\"feed-footer light-text\"\u003E\n      {{\u003Efeed_items/shared/_timestamp}}\n    \u003C/div\u003E\n  \u003C/div\u003E\n\u003C/a\u003E\n";
window.JST['feed_items/_course_completed'] = "\t{{\u003Efeed_items/shared/_actor_link}}\n  completed\n  {{#course}}\n    \u003Ca href=\"/courses/{{slug}}\"\u003E{{name}}\u003C/a\u003E\n  {{/course}}\n  and earned a badge\n\n\t{{\u003Efeed_items/shared/_timestamp}}\n";
window.JST['feed_items/_no_content_user-notification'] = "\u003Cdiv class='no-notifications'\u003E\n  No current notifications.\n\u003C/div\u003E\n";
window.JST['feed_items/shared/_actor_name'] = "{{#actor}}\n  \u003Cstrong\u003E\n    {{^is_current_user}}\n      {{handle}}\n    {{/is_current_user}}\n    {{#is_current_user}}\n      You\n    {{/is_current_user}}\n  \u003C/strong\u003E\n{{/actor}}\n";
window.JST['feed_items/shared/_timestamp'] = "\u003Cabbr title=\"{{created_at_detailed}}\" data-created-at-epoch=\"{{created_at_epoch}}\" class=\"timestamp\"\u003E\n  {{created_at_relative}}\n\u003C/abbr\u003E\n";
window.JST['feed_items/shared/_discussion_link'] = "\u003Ca title=\"{{#discussion}}{{name}}{{/discussion}}\" href=\"/groups/{{#group}}{{slug}}{{/group}}/discussions/{{#discussion}}{{_id}}{{/discussion}}\"\u003E\n  {{#discussion}}\n    {{name}}\n  {{/discussion}}\n\u003C/a\u003E\n";
window.JST['feed_items/shared/_actor_avatar'] = "\u003Cdiv class=\"cell-image\"\u003E\n  {{#actor}}\n    {{\u003Ecommon/_avatar_link}}\n  {{/actor}}\n\u003C/div\u003E\n";
window.JST['feed_items/shared/_respond_to_comment_link'] = "\u003Ca class=\"respond-link\" href=\"/groups/{{#group}}{{slug}}{{/group}}/discussions/{{#discussion}}{{_id}}{{/discussion}}#comment-{{#comment}}{{_id}}{{/comment}}\"\u003E\n  \u003Cspan class=\"icon-page-jump\"\u003E\u003C/span\u003E\n  Respond\n\u003C/a\u003E\n";
window.JST['feed_items/shared/_respond_to_discussion_link'] = "\u003Ca class=\"respond-link\" href=\"/groups/{{#group}}{{slug}}{{/group}}/discussions/{{#discussion}}{{_id}}{{/discussion}}#discussion-{{#discussion}}{{_id}}{{/discussion}}\"\u003E\n  \u003Cspan class=\"icon-page-jump\"\u003E\u003C/span\u003E\n  Respond\n\u003C/a\u003E\n";
window.JST['feed_items/shared/_discussion_footer'] = "\u003Cspan class=\"group-entry-posted-in\"\u003E\u0026#183; Posted in {{\u003Efeed_items/shared/_group_link}} {{\u003Efeed_items/shared/_timestamp}}\u003C/span\u003E\n\u003Cspan class=\"group-entry-posted-at\"\u003E\u0026#183; Posted {{\u003Efeed_items/shared/_timestamp}}\u003C/span\u003E\n";
window.JST['feed_items/shared/_respond_to_response_link'] = "\u003Ca class=\"respond-link\" href=\"/groups/{{#group}}{{slug}}{{/group}}/discussions/{{#discussion}}{{_id}}{{/discussion}}#response-{{#response}}{{_id}}{{/response}}\"\u003E\n  \u003Cspan class=\"icon-page-jump\"\u003E\u003C/span\u003E\n  Respond\n\u003C/a\u003E\n";
window.JST['feed_items/shared/_forum_post_link'] = "/forum_questions/{{#forum_question}}{{_id}}{{/forum_question}}{{^forum_answer_comment}}{{#forum_answer}}#response-{{_id}}{{/forum_answer}}{{/forum_answer_comment}}{{#forum_answer_comment}}#comment-{{_id}}{{/forum_answer_comment}}\n";
window.JST['feed_items/shared/_discussion_path'] = "/groups/{{#group}}{{slug}}{{/group}}/discussions/{{#discussion}}{{_id}}{{/discussion}}{{#response}}#response-{{_id}}{{/response}}{{#comment}}#comment-{{_id}}{{/comment}}\n";
window.JST['feed_items/shared/_expand_text'] = "\u003Ca href=\"#\" class=\"expand-text toggle-class\" data-closest=\"parent\"\u003E\n  \u003Cspan class=\"gradient-reveal\"\u003E\u003C/span\u003E\n  \u003Cspan class=\"collapsed\"\u003E\u0026#9679; \u0026#9679; \u0026#9679;\u003C/span\u003E\n  \u003Cspan class=\"expanded\"\u003E\u0026#9679; \u0026#9679; \u0026#9679;\u003C/span\u003E\n\u003C/a\u003E\n";
window.JST['feed_items/shared/_actor_link'] = "{{#actor}}\n  {{#username}}\n    \u003Ca class=\"username-link {{#is_current_user}}current-user{{/is_current_user}}\" href=\"/users/{{username}}\"\u003E\n      {{^is_current_user}}\n        {{handle}}\n      {{/is_current_user}}\n      {{#is_current_user}}\n        You\n      {{/is_current_user}}\n    \u003C/a\u003E\n  {{/username}}\n\n  {{^username}}\n    \u003Cspan class=\"username-link\"\u003E\n      {{^is_current_user}}\n        {{handle}}\n      {{/is_current_user}}\n    \u003C/span\u003E\n  {{/username}}\n{{/actor}}\n";
window.JST['tags/index/_pagination'] = "\u003Cdiv id=\"tags-pagination-view\" class=\"cc-pagination-container cc-pagination-fancy\"\u003E\n  {{#show_pagination}}\n  {{\u003E common/_pagination}}\n  {{/show_pagination}}\n\u003C/div\u003E";
window.JST['tags/index/_list'] = "{{#items}}\n  \u003Cdiv class=\"tag-item module\" data-id=\"{{_id}}\" data-name=\"{{name}}\"\u003E\n    {{\u003E tags/_tag_item }}\n  \u003C/div\u003E\n{{/items}}";
window.JST['tags/_index'] = "\u003Cdiv id=\"tags-list-view\" class=\"tags-list cf\"\u003E\n  {{\u003E tags/index/_list}}\n\u003C/div\u003E\n\n\u003Cdiv id=\"pagination-view\" class=\"cc-pagination-container cc-pagination-fancy\"\u003E\n  {{#show_pagination}}\n    {{\u003E common/_pagination}}\n  {{/show_pagination}}\n\u003C/div\u003E";
window.JST['tags/_tag_item'] = "\u003Cdiv class=\"tag-show\"\u003E\n  \u003Cdiv class=\"name\"\u003E\n    \u003Ca href=\"/groups?tags={{name}}\" target=\"_blank\"\u003E{{name}}\u003C/a\u003E\n    \u003Cspan class=\"usage-frequency light-text\"\u003E\n      \u0026times; {{#tagged_count}}{{groups}}{{/tagged_count}}\n    \u003C/span\u003E\n  \u003C/div\u003E\n\n  {{#is_admin}}\n    \u003Ca href=\"#\" class=\"toggle-class edit-tag accessory-right\" data-closest=\".tag-item\" data-class-name=\"edit\"\u003E\n      \u0026#63490; edit tag\n    \u003C/a\u003E\n  {{/is_admin}}\n\n  \u003Cdiv class=\"category light-text\"\u003E\n    {{category}}\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"description light-text\"\u003E\n    {{description}}\n  \u003C/div\u003E\n\n\u003C/div\u003E\n\n\u003Cdiv class=\"tag-edit\"\u003E\n  {{\u003E tags/_tag_form }}\n\u003C/div\u003E";
window.JST['tags/_info'] = "\u003Cdiv class=\"tag-info\"\u003E\n\n  \u003Cdiv class=\"tag-info-header\"\u003E\n    {{#tagged_count}}\n      \u003Cstrong\u003E{{groups}}\u003C/strong\u003E tagged\n    {{/tagged_count}}\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"tag-description\"\u003E\n  {{description}}\n  \u003C/div\u003E\n\u003C/div\u003E\n";
window.JST['tags/_tag_form'] = "\u003Cform class=\"cf\"\u003E\n  \u003Cdiv class=\"input-container\"\u003E\n    \u003Cinput id=\"name-input\" name=\"name\" class=\"name-input\" type=\"text\" value=\"{{name}}\" placeholder=\"Name\"\u003E\n    \u003Cspan class=\"name-char-count char-count light-text\"\u003E\u003C/span\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"input-container\"\u003E\n  \u003Cselect name=\"category\"\u003E\n    {{^id}}\n      {{#valid_categories}}\n        \u003Coption value=\"{{.}}\"\u003E{{.}}\u003C/option\u003E\n      {{/valid_categories}}\n    {{/id}}\n    {{#id}}\n      {{#category}}\n        \u003Coption value=\"{{category}}\" selected\u003E{{category}}\u003C/option\u003E\n      {{/category}}\n      {{#other_categories}}\n        \u003Coption value=\"{{.}}\"\u003E{{.}}\u003C/option\u003E\n      {{/other_categories}}\n    {{/id}}\n  \u003C/select\u003E\n  \u003C/div\u003E\n\n  \u003Cdiv class=\"input-container\"\u003E\n    \u003Ctextarea id=\"description-input\" name=\"description\" class=\"description-input\" placeholder=\"Description\"\u003E{{description}}\u003C/textarea\u003E\n    \u003Cspan class=\"description-char-count char-count light-text\"\u003E\u003C/span\u003E\n  \u003C/div\u003E\n\n  {{#id}}\n    \u003Ca href='#' class=\"delete icon-delete\"\u003E\u003C/a\u003E\n    \u003Cdiv class=\"edit-controls accessory-right\"\u003E\n      \u003Ca class=\"cancel light-text toggle-class\" data-closest=\".tag-item\" data-class-name=\"edit\" href=\"#\"\u003ECancel\u003C/a\u003E\n      \u0026nbsp;\n      \u003Ca class=\"submit light-text toggle-class\" data-closest=\".tag-item\" data-class-name=\"edit\" href=\"#\"\u003ESave\u003C/a\u003E\n    \u003C/div\u003E\n  {{/id}}\n  {{^id}}\n    \u003Cdiv\u003E\n      \u003Ca href=\"#\" class=\"bttn add submit\"\u003ECreate\u003C/a\u003E\n      \u0026nbsp;\n      \u003Ca href=\"#\" class=\"toggle-class light-text\" data-closest=\".tags-header\"\u003ECancel\u003C/a\u003E\n    \u003C/div\u003E\n  {{/id}}\n\u003C/form\u003E\n";
window.JST['tags/_tag_basic'] = "\u003Cdiv class=\"name\"\u003E{{.}} \u003Cspan class=\"remove\"\u003E\u0026times;\u003C/span\u003E\u003C/div\u003E";
